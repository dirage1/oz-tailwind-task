export default function Header() {
  return (
    <header className="flex justify-between items-center py-[10px] px-[20px]]
    bg-black">
      <h2>OZ코딩스쿨</h2>
      <ul className="flex justify-center items-center gap-[20px]
      li:list-none li:font-normal li:text-[13px]">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </header>
  );
}
/* .header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: black;
}

.header-container ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

ul li {
  list-style: none;
  font-weight: 400;
  font-size: 13px;
}*/