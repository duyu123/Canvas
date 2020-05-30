import * as d3 from 'd3'
/**
 * @description
 * @date 2020-05-30
 * @export
 * @param {number} height 画布高度
 * @param {string} type 比例尺类型，目前支持的类型 参考https://www.jianshu.com/p/fa11491c8e13
 *    scaleLinear 线性比例尺
 *    scaleBand 序数比例尺
 *    scaleOrdinal 序数比例尺
 *    scaleQuantize 量化比例尺
 *    scaleTime 时间比例尺
 * @param {string} direction 方向比如，Top,Right,Bottom,Left
 */
export default function(
  height:number, 
  type: string,
  direction: string,
  range: any[],
  domain: any[]) {
    let yRange: any[] = range || [height, 0]
    let yDomain: any[] = domain || [height, 0]
    const y = d3[type]().range(yRange).domain[yDomain]

    return d3[`axis${direction}`](y)
}