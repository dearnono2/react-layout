import Layout from "../common/Layout"
import { useState, useRef } from "react";
import Popup from "../common/Popup";
import { useSelector } from "react-redux";

export default function Youtube() {
  // 순서1- 처음 랜더링시 store에서 전달되는 값은 빈 배열이므로 아래 리턴문에는 순간적으로 출력되는 내용이 없음. 
  // 순서3 - axios로 전달받은 값으로 기존 store값이 변경되면 다시 Vids값에는 변경된 store값이 담기면서 아래 리스트가 출력됨.
  const Vids = useSelector(store => store.youtubeReducer.youtube);
  const pop = useRef(null);
  const [Index, setIndex] = useState(0);

  return (
    <>
      <Layout name={'Youtube'}>

          {Vids.map((data,index) => {

          const tit = data.snippet.title;
          const desc = data.snippet.description;
          const date = data.snippet.publishedAt;

          return(
            <article key={index}>
              <h3>{tit.length > 30 ? tit.substr(0, 30) + '...' : tit}</h3>
              <div className="txt">
                <p>{desc.length > 100 ? desc.substr(0, 100) : desc}</p>
                <span>{date.split('T')[0]}</span>
              </div>
              <div className="pic" onClick={() => { 
                pop.current.open();
                setIndex(index)
              }}>
                <img 
                  src={data.snippet.thumbnails.standard.url} 
                  alt={data.snippet.title} />
              </div>
            </article>
          );
        })}

      </Layout>
      <Popup ref={pop}>
        {Vids.length !== 0 && (
          <iframe src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`} frameBorder='0'></iframe>
        )}
      </Popup>
    </>
  )
}



