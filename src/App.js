import "./App.css";

function FilterableMemberTable() {
  return (
    <div className="filterableMemberTable">
      <SearchBar />
      <MembersTable names={NAMES} />
      <ActionButtons />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="searchBar">
      <img src={require("./search.png")}></img>
      <input type="text" placeholder="Find members"></input>
    </div>
  );
}

function MembersTable({ names }) {
  const rows = [];
  names.forEach((name) => {
    rows.push(<MemberRow memberName={name} key={name} />);
  });
  return <div>{rows}</div>;
}

function MemberRow({ memberName }) {
  return (
    <div className="memberRow">
      <MemberData memberName={memberName} />
      <RoundedCheckbox id={memberName} />
    </div>
  );
}

function MemberData({ memberName }) {
  return (
    <div className="memberData">
      <img src={require("./user-gray.png")} className="memberIcon"></img>
      <p>{memberName}</p>
    </div>
  );
}

function RoundedCheckbox({ id }) {
  return (
    <div className="checkbox-container">
      <input type="checkbox" id={id}></input>
      <label htmlFor={id}></label>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="actionButtons">
      <button className="cancelButton">Cancel</button>
      <button className="saveButton">Save</button>
    </div>
  );
}

const NAMES = [
  "Carolien Bloeme",
  "Sun Jun",
  "Song Bad",
  "Olivia Arribas",
  "Bonginkosi Mdiodiana",
  "Arina Belomestnykh",
  "Jacqueline Likoki",
];

export default function App() {
  return (
    <div>
      <p className="header">Add members to Front-end development team</p>
      <FilterableMemberTable />
    </div>
  );
}
