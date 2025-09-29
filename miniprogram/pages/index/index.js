Page({
   {
    currentTime: '',
    message: '点击上面的按钮试试看！',
    clickHistory: []  // 添加点击历史
  },

  onLoad() {
    this.updateTime();
    this.loadClickHistory();  // 加载历史记录
  },

  onShow() {
    console.log('页面显示了');
  },

  updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString('zh-CN');
    this.setData({
      currentTime: timeString
    });
  },

  loadClickHistory() {
    // 从本地存储加载点击历史
    const history = wx.getStorageSync('clickHistory') || [];
    this.setData({
      clickHistory: history
    });
  },

  saveClickHistory(message) {
    let history = this.data.clickHistory;
    history.unshift({
      time: new Date().toLocaleString('zh-CN'),
      message: message
    });
    
    // 只保留最近10条记录
    if (history.length > 10) {
      history = history.slice(0, 10);
    }
    
    this.setData({
      clickHistory: history
    });
    
    // 保存到本地存储
    wx.setStorageSync('clickHistory', history);
  },

  clickButton() {
    const operationTime = new Date().toLocaleString('zh-CN');
    const newMessage = `按钮被点击了！时间：${operationTime}`;
    
    this.setData({
      message: newMessage
    });
    
    this.updateTime();
    this.saveClickHistory(newMessage);
  }
});