const TutorialList = (props: any) => {
  return (
    <div>
      <h1>Tutorials</h1>
      <table className="table">
        <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <a href="/tutorials/1">
            <td>React</td>
            <td>React is a JavaScript library for building user interfaces.</td>
          </a>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TutorialList