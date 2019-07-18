import React from 'react'
import mockjs, { Random } from 'mockjs'

export default class DataTabel extends React.Component {
  static generate() {
    return mockjs.mock({
        'data|1-20': [{
        'NIS|12300000000-12399999999': 1,
        'Nama|1': '@first @last',
        'Nilai|70-100': 1,
      }]
    });
  }
}