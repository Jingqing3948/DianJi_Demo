// pages/article/article.js
const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        jingdu: "",
        weidu: "",
        dataobj: "",
        markers: [],
        content:""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var docstring = options.docstring
        var markersid = ""
        var that = this
        db.collection("databasearticles").doc(docstring).get({
            success: res => {
                markersid = res.data.markersid
                console.log(markersid)
                this.setData({
                    dataobj: res.data,
                    content:res.data.content.split('\n').join('&hc')
                })
                db.collection("databasemarkers").doc(markersid).get({
                    success: res => {
                        this.setData({
                            markers: res.data.markers
                        })
                        console.log(that.data.markers)
                    }
                })
            }
        })
        // db.collection("databasemarkers").doc(markersid).get({
        //     success: res => {
        //         this.setData({
        //             markers: res.data.markers
        //         })
        //         console.log(this.markers)
        //     }
        // })

        wx.getLocation({
            altitude: 'altitude',
            highAccuracyExpireTime: 0,
            isHighAccuracy: true,
            type: 'type',
            success: (result) => {
                console.log(result)
                this.setData({
                    jingdu: result.latitude,
                    weidu: result.longitude
                })
            }
            // fail: (res) => {},
            // complete: (res) => {},
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})