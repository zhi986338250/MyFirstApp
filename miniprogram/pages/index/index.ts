// pages/index/index.ts
Page({
  data: {
    currentTime: '',
    message: '点击上面的按钮试试看！',
    clickHistory: [] as Array<{time: string, message: string}>
  },

  onLoad() {
    this.updateTime();
    this.loadClickHistory();
  },

  onShow() {
    // 页面显示时重新加载历史记录，以反映其他页面的更改
    this.loadClickHistory();
  },

  updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString('zh-CN');
    this.setData({
      currentTime: timeString
    });
  },

  loadClickHistory() {
    const history = wx.getStorageSync('clickHistory') || [];
    this.setData({
      clickHistory: history
    });
  },

  saveClickHistory(message: string) {
    let history = this.data.clickHistory;
    history.unshift({
      time: new Date().toLocaleString('zh-CN'),
      message: message
    });
    
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
    console.log('按钮被点击了');
    const operationTime = new Date().toLocaleString('zh-CN');
    const newMessage = `按钮被点击了！时间：${operationTime}`;
    
    this.setData({
      message: newMessage
    });
    
    this.updateTime();
    this.saveClickHistory(newMessage);
  },
  
  goToLogs() {
  wx.navigateTo({
    url: '/pages/logs/logs'
  });
}
});
