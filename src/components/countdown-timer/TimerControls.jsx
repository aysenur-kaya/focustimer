export default function TimerControls({
  isRunning,
  isPaused,
  onStart,
  onPause,
  onResume,
  onReset,
}) {
  return (
    <div className="timer-controls">
      {!isRunning && !isPaused && (
        <button className="primary" onClick={onStart}>Başlat</button>
      )}

      {isRunning && (
        <button className="warning" onClick={onPause}>Duraklat</button>
      )}

      {isPaused && (
        <button className="primary" onClick={onResume}>Devam</button>
      )}

      <button className="danger" onClick={onReset}>Sıfırla</button>
    </div>
  );
}
