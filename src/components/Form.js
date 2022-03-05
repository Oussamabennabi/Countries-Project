export default function Form() {
  
  return (
    
    <form className="form">
      <div className="container">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Search for a country..." />
        <select className="select">
          <option disabled selected value="Filter by Region">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
    </div>
      </form>
  );
}