import Grid from 'tui-grid';
import 'tui-date-picker/dist/tui-date-picker.css'; // 데이트 피커 스타일 추가

import 'tui-grid/dist/tui-grid.css';

const columnData = [
      {
        header: '날짜',
        name: 'date',
        editor: {
          type: 'datePicker',
          options: {
            format: 'yyyy-MM-dd'
          }
        }
      },
      {
        header: '상품수량',
        name: 'category2',
        editor: 'text'
      },
      {
        header: '추가상품',
        name: 'payment',
        formatter: 'listItemText',
        editor: {
          type: 'checkbox',
          options: {
            listItems: [
              {
                text: '현금',
                value: '1'
              },
              {
                text: '카드',
                value: '2'
              },
              {
                text: '페이코',
                value: '3'
              }
            ]
          }
        }
      },
      {
        header: '변경상품',
        name: 'amount',
        editor: 'text'
      }
];

const rowData = [
     {
        date: '2021-01-01',
        category1: '1', // '식비' -> '1' 변경
        category2: '회사 편의점',
        payment: '3', // '페이코' -> '3' 변경
        amount: '5000'
      },
      {
        date: '2021-01-02',
        category1: '1', // '식비' -> '1' 변경
        category2: '회사 편의점',
        payment: '3', // '페이코' -> '3' 변경
        amount: '5000'
      },
      {
        date: '2021-01-03',
        category1: '1', // '식비' -> '1' 변경
        category2: '회사 편의점',
        payment: '3', // '페이코' -> '3' 변경
        amount: '5000'
      },
      {
        date: '2021-01-04',
        category1: '1', // '식비' -> '1' 변경
        category2: '회사 편의점',
        payment: '3', // '페이코' -> '3' 변경
        amount: '5000'
      },
      {
        date: '2021-01-05',
        category1: '1', // '식비' -> '1' 변경
        category2: '회사 편의점',
        payment: '3', // '페이코' -> '3' 변경
        amount: '5000'
      },
      {
        date: '2021-01-06',
        category1: '1', // '식비' -> '1' 변경
        category2: '회사 편의점',
        payment: '3', // '페이코' -> '3' 변경
        amount: '5000'
      },
      {
        date: '2021-01-07',
        category1: '1', // '식비' -> '1' 변경
        category2: '회사 편의점',
        payment: '3', // '페이코' -> '3' 변경
        amount: '5000'
      },
      {
        date: '2021-01-08',
        category1: '1', // '식비' -> '1' 변경
        category2: '회사 편의점',
        payment: '3', // '페이코' -> '3' 변경
        amount: '5000'
      },
      {
        date: '2021-01-09',
        category1: '1', // '식비' -> '1' 변경
        category2: '회사 편의점',
        payment: '3', // '페이코' -> '3' 변경
        amount: '5000'
      },
      {
        date: '2021-01-10',
        category1: '1', // '식비' -> '1' 변경
        category2: '회사 편의점',
        payment: '3', // '페이코' -> '3' 변경
        amount: '5000'
      },
  ];
  
  const grid = new Grid({
    el: document.getElementById('grid'),
    columns: columnData,
    data: rowData // 변경
  });