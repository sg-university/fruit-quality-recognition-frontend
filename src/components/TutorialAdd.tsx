const TutorialAdd = () => {

  return (
    <div>
      <h1>Add Tutorial</h1>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" required/>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control" id="description" required/>
        </div>
      </form>
    </div>
  )
}

export default TutorialAdd