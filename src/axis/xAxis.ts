import * as d3 from 'd3'
/**
 * @description
 * @date 2020-05-30
 * @export
 * @param {number} width 画布宽度
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
  width:number, 
  type: string,
  direction: string,
  range: any[],
  domain: any[]) {
    let xRange: any[] = range || [0, width]
    let xDomain: any[] = domain || [0, width]
    const x = d3[type]().range(xRange).domain[xDomain]

    return d3[`axis${direction}`](x)
}