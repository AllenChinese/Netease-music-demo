import fetch from '../config/fetch'

/**
 * 获取所有的楼层信息
 */ 
 export const findAllArea = () => fetch('/map/findAllArea');