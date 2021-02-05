import Grid2 from 'tui-grid';
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
        header: '내역',
        name: 'category1',
        formatter: 'listItemText',
        editor: {
          type: 'select',
          options: {
            listItems: [
              {
                text: '선택 안함',
                value: '0'
              },
              {
                text: '식비',
                value: '1'
              },
              {
                text: '문화 생활비',
                value: '2'
              },
              {
                text: '교통비',
                value: '3'
              },
              {
                text: '관리비',
                value: '4'
              }
            ]
          }
        }
      },
      {
        header: '비고',
        name: 'category2',
        editor: 'text'
      },
      {
        header: '결제 방식',
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
        header: '금액',
        name: 'amount',
        editor: 'text'
      }
];



const rowData = [
    {
        date: '2020-11-16',
        category1: '1', // '식비' -> '1' 변경
        category2: '회사 편의점',
        payment: '3', // '페이코' -> '3' 변경
        amount: '5000'
      }
  ];
  
  const grid = new Grid({
    el: document.getElementById('grid2'),
    columns: columnData,
    data: rowData // 변경
  });