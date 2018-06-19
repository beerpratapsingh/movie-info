$(document).ready(() => {
  $("#searchForm").on('submit', (e)=> {
    let searchText = $("#searchText").val();          
    getSearchMovies(searchText);    
    e.preventDefault();
  })
});

function getSearchMovies(searchText) {
  //let searchData = searchText;
  axios({
    method: 'get',
    //url : 'https://admin.turtlemint.com/api/getBrokerConfig?searchData='+searchText,    
    url : 'http://www.omdbapi.com/?apikey=5d25b7aa&t='+ searchText
  })
  .then((res)=> {
    console.log("==>", res);
    $("#moviesList")[0].innerHTML = JSON.stringify(res.data.Title);
  })
  .catch((err)=> {
    console.log(err);
  })
  // axios.get('https://admin.turtlemint.com/api/getBrokerConfig?s='+searchText)
  //   .then(function(res){
  //     let data = res.data.insurerConfig;
  //     console.log('==>', data);
  //     console.log('<==>', res.data);
  //   })
  //   .catch(function(err){
  //     console.log(err);
  //   })
}

