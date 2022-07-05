// pages/record/record.js
let cnt = 0
const db = wx.cloud.database()
Page({
    /**
     * 页面的初始数据
     */
    data: {
        jingdu: "",
        weidu: "",
        recmode: 0,
        markers: [],
        // polyline: [{
        // 	points: [],
        // 	color: "#FA6400",
        // 	width: 10,
        // 	arrowLine: true,
        // 	borderWidth: 2 //线的边框宽度，还有很多参数，请看文档 
        // }]
    },
    recstart: function () {
        var that = this
        cnt = cnt + 1
        wx.getLocation({
            altitude: 'altitude',
            highAccuracyExpireTime: 0,
            isHighAccuracy: true,
            type: 'gcj02',
            success: (result) => {
                console.log(result)
                let marker = this.data.markers
                marker.push({
                    id: cnt-1,
                    latitude: result.latitude,
                    longitude: result.longitude,
                    width: 20,
                    height: 30
                })
                // let pointobj = this.data.polyline[0].points
                // console.log(pointobj)
                // pointobj.push(
                //   {
                // 	  latitude: result.latitude,
                //     longitude: result.longitude,
                //   }
                // )
                console.log(that.data.markers)
                that.setData({
                    jingdu: result.latitude,
                    weidu: result.longitude,
                    recmode: 1,
                    markers: marker,
                    // polyline:[{
                    //   points:pointobj
                    // }]
                })
            },
            // fail: (res) => {},
            // complete: (res) => {},
        })
    },
    recstop:function() {
      var that = this
      db.collection("databasemarkers").add({
        data:{
          markers:this.data.markers
        }
      }).then(res=>{
        console.log("数据添加成功！")
        console.log(res)
        var docstring=res._id
        wx.navigateTo({
        url: '/pages/addarticle/addarticle?docstring='+docstring
      })
      })
      
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that = this
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

    },
  /**
   * 页面的初始数据
   */
  data: {
    subKey: 'DKEBZ-LKBW4-B3KUP-DYSCI-IG7OS-SQBJH',
    enable3d: false,
    showLocation: true,
    showCompass: false,
    enableOverlooking: false,
    enableZoom: true,
    enableScroll: true,
    enableRotate: false,
    drawPolygon: false,
    enableSatellite: false,
    enableTraffic: false,
    latitude: '40.040417',
    longitude: '116.273514',
    markers: [],
    circles: [],
    polylines: [],
    polygons: [],
    moveToLocation: function() {
      this.mapCtx.moveToLocation()
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    const map = wx.createMapContext("map");
    map.moveToLocation();
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