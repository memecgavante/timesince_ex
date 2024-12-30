import "./styles.css";
import Comment from "./comment";

import { testValues } from "./utils/testValues.js";

export default function App() {
  // Test values: Week ms = 604,800,000; day ms = ; hour ms =3,600,000 ; min in ms = 60 000; day in ms 86,400,000 ;

  const datecreated = new Date();
  return (
    <div>
      <div className="App">
        <h1>The time passed since:</h1>
        <div>
          <p>
            <b>You opened the app</b>
          </p>
          <p>
            Time passed since: {datecreated.getDate()} /{" "}
            {datecreated.getMonth()} /{datecreated.getFullYear()}
          </p>
          <p>
            {datecreated.getHours()} :{" "}
            {datecreated.getMinutes().toString().padStart(2, 0)}
          </p>
          <Comment date_created={datecreated} />
        </div>
        <hr />
        <div>
          <b>
            Time passed since: {testValues.week.getDate()} /{" "}
            {testValues.week.getMonth()} /{testValues.week.getFullYear()}
          </b>
          <br />
          {datecreated.getHours()} :{" "}
          {datecreated.getMinutes().toString().padStart(2, 0)}
          <Comment date_created={testValues.week} />
        </div>
        <hr />
        <div>
          <b>
            Time passed since:
            {testValues.day.getDate()} / {testValues.day.getMonth()} /
            {testValues.day.getFullYear()}
          </b>
          <br />
          {datecreated.getHours()}
          {datecreated.getMinutes().toString().padStart(2, 0)}
          <Comment date_created={testValues.day} />
        </div>
        <hr />
        <div>
          <b>
            Time passed since: {testValues.hour.getDate()} /{" "}
            {testValues.hour.getMonth()} /{testValues.hour.getFullYear()}
          </b>
          <br />
          {testValues.hour.getHours()} :{" "}
          {datecreated.getMinutes().toString().padStart(2, 0)}
          <Comment date_created={testValues.hour} />
        </div>
        <hr />
        <div>
          <b>
            Time passed since: {testValues.minute.getDate()} /{" "}
            {testValues.minute.getMonth()} /{testValues.minute.getFullYear()}
          </b>
          <br />
          {testValues.minute.getHours()} :{" "}
          {testValues.minute.getMinutes().toString().padStart(2, 0)}
          <Comment date_created={testValues.minute} />
        </div>
      </div>
      <hr />
      <footer>
        <p>Task: </p>
        <p>
          You have a comment component and need to without reloading
          showcasevhow much time has passed since the creation of the comment.
        </p>
        <p>
          Assume you would be given a prop called date_created in mildivseconds
        </p>
      </footer>
    </div>
  );
}
