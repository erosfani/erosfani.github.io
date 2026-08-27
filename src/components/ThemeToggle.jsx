import Sun from "./icons/Sun.jsx";
import AutoTheme from "./icons/AutoTheme.jsx";
import Moon from "./icons/Moon.jsx";

const OPTIONS = [
  {value: 'light', label: 'Light theme', Icon: Sun},
  {value: 'auto', label: 'Match the sunset', Icon: AutoTheme},
  {value: 'dark', label: 'Dark theme', Icon: Moon},
];

function ThemeToggle({preference, onChange}) {
  return (
    <div className="theme-toggle" role="group" aria-label="Theme">
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`theme-toggle-option${preference === option.value ? ' active' : ''}`}
          aria-pressed={preference === option.value}
          title={option.label}
          onClick={() => onChange(option.value)}
        >
          <option.Icon/>
        </button>
      ))}
    </div>
  );
}

export default ThemeToggle;
