

export default function TabButton({ children, isClicked, ...props }) {
  return (
    <div>
      <button className={isClicked ? "tab-btn" : undefined} {...props}>
        {children}
      </button>
    </div>
  );
}