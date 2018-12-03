import '../__mocks__/wxMock'
import TuaApi from '../../src/TuaApi'
import fakeWx from '../../examples/apis-mp/fake-wx'
import { fakeWxApi } from '../../examples/apis-mp/'

const testObjData = { code: 0, data: 'object data' }
const testArrData = [ 0, 'array data' ]

describe('middleware', () => {
    const tuaApi = new TuaApi()
    const fakeWxApi = tuaApi.getApi(fakeWx)
    const globalMiddlewareFn = jest.fn(async (ctx, next) => {
        await next()

        expect(ctx.endTime).toBeDefined()
        expect(ctx.reqTime).toBeDefined()
    })

    tuaApi.use(globalMiddlewareFn)

    beforeEach(() => {
        wx.__TEST_DATA__ = { testData: {} }
    })

    test('useGlobalMiddleware', async () => {
        await fakeWxApi.arrayData()
        expect(globalMiddlewareFn).toBeCalledTimes(0)
        await fakeWxApi.fail()
        expect(globalMiddlewareFn).toBeCalledTimes(1)
    })
})

describe('fake wx requests', () => {
    beforeEach(() => {
        wx.__TEST_DATA__ = {}
    })

    test('object-data', async () => {
        wx.__TEST_DATA__ = { testData: testObjData }
        const resData = await fakeWxApi.objectData({ param3: '123' })

        expect(resData).toEqual({ code: 0, data: 'object data' })
    })

    test('array-data', async () => {
        wx.__TEST_DATA__ = { testData: testArrData }
        const resData = await fakeWxApi.arrayData(null)

        expect(resData).toEqual({ code: 0, data: 'array data' })
    })

    test('fail', () => {
        wx.__TEST_DATA__ = { isTestFail: true }

        return expect(fakeWxApi.fail({ a: 'b' }))
            .rejects.toEqual(Error('test'))
    })

    test('no-beforeFn', () => {
        return expect(fakeWxApi.noBeforeFn())
            .rejects.toEqual(Error('没有数据'))
    })

    test('hide-loading', async () => {
        wx.showLoading.mockClear()
        wx.__TEST_DATA__ = { testData: testObjData }
        const resData = await fakeWxApi.hideLoading()

        expect(resData).toEqual({ code: 0, data: 'object data' })
        expect(wx.showLoading).toHaveBeenCalledTimes(0)
    })

    test('type-get', async () => {
        wx.showLoading.mockClear()
        wx.__TEST_DATA__ = { testData: testObjData }
        await fakeWxApi.typeGet()
        const [[{ method }]] = wx.request.mock.calls

        expect(method).toBe('GET')
        expect(wx.showLoading).toHaveBeenCalledTimes(1)
    })

    test('unknown-type', () => {
        return expect(fakeWxApi.unknownType())
            .rejects.toEqual(Error(`Unknown Method: FOO!!!`))
    })

    test('nav-loading', async () => {
        wx.showNavigationBarLoading.mockClear()
        wx.__TEST_DATA__ = { testData: testObjData }
        const resData = await fakeWxApi.navLoading()

        expect(resData).toEqual({ code: 0, data: 'object data' })
        expect(wx.showNavigationBarLoading).toHaveBeenCalledTimes(1)
    })
})
