import List from "./list"

export default function Footer() {
  return (
    <div className="footer">
      <div className='footer-left'>
        <p className="footer-text">@copy right 2025</p>
      </div>
      <div className='footer-right'>
        <List />
      </div>
    </div>
  );
}
