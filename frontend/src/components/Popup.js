function Popup({ title, items, onClose }) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>X</button>
        <h3>{title}</h3>
        <div className="popup-items">
          {items.map((item, i) => (
            <div key={i} className="popup-item">
              {item.icon && <img src={item.icon} alt={item.name} width={32} height={32} />}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popup;