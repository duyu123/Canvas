import * as d3 from 'd3'
import xAxis from './axis/xAxis'
import yAxis from './axis/yAxis'


interface optsConfig {
  [index: string]: any
}


interface svgConfig { 
  [propName: string] : any;
}

interface marginConfig {
  top: number;
  right: number;
  bottom: number;
  left: number;
}
class charts {
  _dom: string;
  _opts: optsConfig;
  _svg: svgConfig;

  _width: number;
  _height: number;

  _margin: marginConfig;

  constructor(dom: string, opts: optsConfig) {
    this._dom = dom;
    this._opts = opts;

    this._width = opts.width || 0;
    this._height = opts.height || 0;

    this._margin = opts.margin || 
      {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }

    this.createSvg();
  }
  
  createSvg() {
    this._svg = d3.select(this._dom)
                .append("svg")
                .attr("width", this._width + this._margin.left + this._margin.right)
                .attr("height", this._height + this._margin.top  + this._margin.bottom)
                .append("g")
                .attr("transform",`translate(${this._margin.left},${this._margin.top})`)
  }

  draw() {
    // 创建x比例尺
    const x = xAxis(this._width, 
        this._opts.type, 
        this._opts.direction, 
        this._opts.range,
        this._opts.domain)

    this._svg.append('g')
      .attr("class", "x axis")
      .attr("transform", "translate(0," + this._height + ")").call(x);

    // 创建y比例尺
    const y = yAxis(this._height, 
      this._opts.type, 
      this._opts.direction, 
      this._opts.range,
      this._opts.domain)

  this._svg.append('g')
    .attr("class", "y axis")
    .call(y);
             
  }
  
  resize() {

  }

}