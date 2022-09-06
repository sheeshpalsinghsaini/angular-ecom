this.isLogin = this.authHelper.checkLogin()
    this.user = this.isLogin?this.authHelper.getCurrentUser():null