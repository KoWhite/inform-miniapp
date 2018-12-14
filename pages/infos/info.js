var infosData = require('../../data/local-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showView: true,
    rotateData: null
  },

  //当用户点击按钮，逻辑层将showView切换为其相反布尔类型并传给视图层。用let定义变量，防止全局污染。
  showButton:function () {
    let that = this;
    //根据按钮的行为对应导航栏的背景颜色
    if(that.data.showView == true){
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#7be85a'
      })
    }else{
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#5A9DE8'
      })
    }

    //点击图片切换showView的相反布尔型传给视图层
    that.setData({
      showView: (!that.data.showView)
    })
  },

  onInfoTap: function (event) {

    var infoId = event.currentTarget.dataset.infoid;
    wx.navigateTo ({
      url: "info-detail/info-detail?id=" +infoId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      infoList: infosData.infoList
    });
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var animation = wx.createAnimation({})
    animation.rotate(360).step({duration:3000})
    this.setData({
      rotateData: animation.export()
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },
})