// import React , {useEffect , useState} from 'react'

// const useInfiniteScroll = (callback) => {
//     const [isFetching, setIsFetching] = useState(false);

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//       }, []);

//       useEffect(() => {
//         if (!isFetching) return;
//         callback(() => {
//           console.log('called back');
//         });
//       }, [isFetching]);

//       function handleScroll() {
//         const {scrollTop , scrollHeight , clientHeight} = 
//         document.documentElement;
    
//         if(scrollTop + clientHeight >= scrollHeight - 5){
//             setIsFetching(true);
//             console.log('fetching...');
//         }
//       }

     
  
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default useInfiniteScroll;
