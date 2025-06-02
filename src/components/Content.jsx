export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-[5px]">
      <img className="w-[300px] rounded-[10px] mb-[3px]"
      src={content.img} alt={content.title} />
      <span className="text-[12px] text-[#d7fa00] border-[1px] border-[#d7fa00]
      py-[4px] px-[5px] rounded-[3px]"> 모집중 </span>
      <div className="text-[18px] font-semibold">{content.title}</div>
      <p className="text-[12px] text-[rgb(160, 160, 160)]">{content.subtitle}</p>
    </div>
  );
}
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
