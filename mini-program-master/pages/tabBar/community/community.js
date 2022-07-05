// pages/tabBar/community/community.js
const db=wx.cloud.database()
Page({
    /**
     * 页面的初始数据
     */
    data: {
        new3obj: ""
    },
    Jump1() {
        var docstring = "f6e08a64627b6ffe0260f2c64f1f59a9";
        wx.navigateTo({
            url: '/pages/article/article?docstring=' + docstring
        })
    },
    Jump2() {
            var docstring = "0a4ec1f9627bb6250338d072068a49e0";
            wx.navigateTo({
                url: '/pages/article/article?docstring=' + docstring
            })
        },
    toarticle:function(e) {
      console.log(e)
      console.log(e.currentTarget.dataset.index)
      var idx=e.currentTarget.dataset.index
      var docstring = this.data.new3obj[idx]._id;
            wx.navigateTo({
                url: '/pages/article/article?docstring=' + docstring
            })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      db.collection("databasearticles")
      .orderBy('createdate','desc')
      .limit(3)
      .get({
        success:res=>{
          console.log(res)
          this.setData({
            new3obj:res.data
          })
        }
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