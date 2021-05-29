import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import SearchEvents from './components/SearchEvents.jsx';
import DisplayEvents from './components/DisplayEvents.jsx';



const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('Rome');
  const [url, setUrl] = useState('http://localhost:3000/events?q=Rome');
  const [perPage] = useState(10);
  const [offset, setOffset] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
        const result = await axios(url);
        const data = result.data;
        const slice = data.slice(offset - 1 , offset - 1 + perPage);
        setData(slice);
        setPageCount(Math.ceil(data.length / perPage));
    }

    fetchData();
  }, [url, offset]);

  return (
    <div>
      <h1>Historical Events Finder</h1>
      <br></br>
      <SearchEvents setUrl={setUrl} query={query} setQuery={setQuery}/>
      <br></br>
      <DisplayEvents data={data}/>
      <br></br>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={7}
        marginPagesDisplayed={1}
        previousLabel={'Previous Page'}
        nextLabel={'Next Page'}
        breakLabel={'...'}
        breakClassName={'elipses'}
        onPageChange={(e) => {
          const selectedPage = e.selected;
          setOffset(selectedPage + 1)
        }}
        containerClassName={'paginationContainer'}
        pageClassName={'page'}
        activeClassName={'activePage'}
        previousClassName={'previous'}
        nextClassName={'next'}
      />
    </div>
  )
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data = [],
//       query = '',
//       perPage = 10,

//     }

//   }



//   componentDidMount() {

// }


//   handlePageClick (e) {

//   };


//   render () {
//     return (
//       <div>
//         Hello World
//       </div>
//     );
//   }


// }

ReactDOM.render(<App />, document.getElementById('app'));