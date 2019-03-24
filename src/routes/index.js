const pageIndex=r=>require.ensure([],()=>(require('../modules/pageIndex')),'pageIndex');


export default [{
    path:'/',
    name:'pageIndex',
    component:pageIndex,
  },
]
