// pages/addarticle/addarticle.js
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataobj:{
      comment:"",
      content:"",
      title:"",
      markersid:""
    }
  },
  inputtitle:function(options){
    var value=options.detail.value
    console.log(value)
    this.setData({
      title:value
    })
  },
  inputcomment:function(options){
    var value=options.detail.value
    console.log(value)
    this.setData({
      comment:value
    })
  },
  inputcontent:function(options){
    var value=options.detail.value
    console.log(value)
    this.setData({
      content:value
    })
  },
  submit(){
    var mydate=new Date()
    db.collection("databasearticles").add({
      data:{
        content:this.data.content,
        markersid:this.data.markersid,
        comment:this.data.comment,
        title:this.data.title,
        createdate:mydate
      }
    }).then(res=>{
      console.log("数据添加成功！")
        console.log(res)
        wx.navigateTo({
          url: '/pages/success/success',
        })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var docstring=options.docstring
    console.log(docstring)
    this.setData({
      markersid:docstring
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