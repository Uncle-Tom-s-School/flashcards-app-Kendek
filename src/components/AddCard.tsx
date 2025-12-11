

const AddCard = () => {

    const addBtnClick = () => {
        alert("Hozzáadva!")
    }

  return (
    <div className="addCardContainer">
        <h1>Új kártya létrehozása</h1>

        <div className="mainDiv">

            <div className="secContainer">
                <section className="right">
                    <h2>Kérdés</h2>
                    <textarea></textarea>
                </section>
                <section className="left">
                    <h2>Válasz</h2>
                    <textarea></textarea>
                </section>
            </div>

            <div className="addBtn" onClick={addBtnClick}>
                <i className="fa-solid fa-plus"></i>
                Hozzáad
            </div>

        </div>

    </div>
  )
}

export default AddCard