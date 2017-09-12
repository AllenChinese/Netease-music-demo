let cookie = {
  /**
     * [获得cookie]
     * @param  {[type]} name
     * @return {[type]}    
     */
	get: function(name) {
    var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');

      return v ? v[2] : null;
  },

  /**
    * [写入cookie]
    * @param {[type]} name  [cookie name]
    * @param {[type]} value [cookie value]
    * @param {[type]} days
    */
  set: function (name, value, days) {
      var d = new Date;
      d.setTime(d.getTime() + 24*60*60*1000*days);

      window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
   },

  /**
    * [删除cookie]
    * @param  {[type]} name
    * @return {[type]}
    */
  delete: function (name) {
      this.set(name, '', -1);
  }
}

export {
  cookie
}