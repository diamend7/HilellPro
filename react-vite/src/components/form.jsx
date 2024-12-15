const Form = () => (
  <form className="flexContainer">
    <span id="apiLink">https://swapi.dev/api/</span>
    <input type="text" placeholder="people/1/" id="input" />
    <button id="buttonGet" type="button">
      Get Info
    </button>
  </form>
);

export default Form;
