export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-[5px]">
      <img className="w-96 rounded-xl mb-[3px]"
      src={content.img} alt={content.title} />
      <span className="text-base text-lime-400 border-2 border-lime-400
      py-[4px] px-[5px] rounded-[3px]"> 모집중 </span>
      <div className="text-lg font-extrabold">{content.title}</div>
      <p className="text-sm text-gray-400 font-semibold">{content.subtitle}</p>
    </div>
  );
}
// 과제 완료 후 연습 겸 보기좋은 느낌으로 약간씩 수정

// .content-container {
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 5px;
// }

// .content-container img {
//   width: 300px;  
//   border-radius: 10px;
//   margin-bottom: 3px;
// }

// .content-container span {
//   font-size: 12px;
//   color: #d7fa00;
//   border: 1px solid #d7fa00;
//   padding: 4px 5px;
//   border-radius: 3px;
// }

// .content-container div {
//   font-size: 18px;
//   font-weight: 600;
// }

// .content-container p {
//   font-size: 12px;
//   color: rgb(160, 160, 160);
// }
