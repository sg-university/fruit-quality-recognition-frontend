const TutorialDetail = () => {
  return (
    <div>
      <h1>Tutorial Detail</h1>
      <table className="table">
        <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>React</td>
          <td>React is a JavaScript library for building user interfaces.</td>
          <td>
            <a href='#'>Delete</a>
            <a href='#'>Update</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TutorialDetail