export default function IconSwitch({icon, onSwitch}) {
    return <div className="row switch">
        <div className={"icon-switch-btn material-icons"} onClick={onSwitch}>{icon}</div>
    </div>
}