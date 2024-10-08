import { PageLayout } from "../components/PageLayout";
import "./LearningJavaScript.css";

export function LearningJavaScript() {
  return (
    <PageLayout title="Building Proficiency in JavaScript">
      <div className="learning-javascript article">
        <img
          className="article-image"
          src="/git-article.jpg"
          alt=" Cartoon girl studying technology"
        />
        <h3>Important data structures in Javascript</h3>
        <p>
          <code style={{ textWrap: "wrap", whiteSpace: "pre-line" }}>
            {`<script> 
let name = "Pooja";
let lastName = "Darade";
let studyLevel = "Masters"
console.log(name, lastName, studyLevel);
</script>`}
          </code>
        </p>

        <h3>Following are the options to write JavaScript:</h3>
        <ul>
          <li>Use any code editor - I am using VS code</li>
          <li>Another option is online code editors such as codepen</li>
          <li>Create a HTML File as you can run that in any web browser</li>
        </ul>

        <h3>
          Following are some important concepts I have learnt to write
          JavaScript:
        </h3>
        <ol>
          <li>
            <p>
              First thing we are going to learn is how to add comments in
              JavaScript:
            </p>
            <p>
              <code>//</code> is used for in-line comments.
            </p>
            <p>
              <code>/* */</code> is used for multi-line comment.
            </p>
          </li>
          <li>
            <p>Data types:</p>

            <ul>
              <li>undefined: Something which has not been defined yet</li>
              <li>
                null: When you set this property, that element explicitly means
                nothing.
              </li>
              <li>boolean: true or false</li>
              <li>string: set of characters</li>
              <li>
                symbol: A symbol is an immutable primitive value that is unique
              </li>
              <li>number: numbers</li>
              <li>
                object: An object can store a lot of different key value pairs.
              </li>
            </ul>
          </li>
          <li>
            <p>
              Variables, we often set data into a variable. A variable allows
              computers to store and manipulate data in a dynamic fashion. It is
              basically a label to point to data.
            </p>

            <p>There are three ways to declare variables:</p>

            <ol>
              <li>
                <code>let muName = "Beau" followed by myName = 8</code>
              </li>
              <li>
                <code>let ourName = "Pooja"</code>
              </li>
              <li>
                <code>const yourName = "John"</code>
              </li>
            </ol>

            <p>
              A difference between <code>var, const and let.</code> Var is going
              to be able to be used throughout your whole program. Let will only
              be able to use within scope where you declare that and const is a
              variable that can never ne reassigned.
            </p>
            <p>
              There is difference between declaring a variable and assigning a
              variable.
            </p>
            <p>
              <code>var a; This how to declare a variable.</code>
            </p>

            <p>
              <code>
                let b=2; By using = assignment operator we can assign variable
                to a value.
              </code>
            </p>
            <p>
              <code>
                console.log(a) console.log allows you to see things in the
                console.
              </code>
            </p>

            <p>
              <code>let a=9;</code>
              In this we are declaring and initializing variable at the same
              time. let a is declaring it and by using assignment operator = we
              are initializing value 9.
            </p>
          </li>
          <li>
            <p>Case sensitivity in variables:</p>
            <p>
              Variable names and function names are case sensitive in
              JavaScript. Use camelCase when are you declaring variables. For
              example, start a variable name with small letters and when you
              have a new word use a capital letter.
            </p>
            <code>studyJavaScript</code>
          </li>
          <li>
            <p>Adding numbers</p>
            <p>We use + operator for adding numbers in JavaScript.</p>
          </li>

          <li>
            <p>Escape sequences in strings:</p>
            <ol>
              <li>'\ single quote</li>
              <li>"\ double quote</li>
              <li>\\ backslash</li>
              <li>\n newline</li>
              <li>\r carriage return</li>
              <li>\t tab</li>
              <li>\b backspace</li>
              <li>\f form feed</li>
            </ol>
          </li>

          <li>
            <p>Concatenating strings with the plus operator:</p>
            <p>
              <code>
                Option 1: let ourStr = "I come first." + "I come second.";{" "}
              </code>
            </p>

            <p>
              let myStr2 = "This is the start" + "This is the end.";
              console.log(myStr2);
            </p>

            <p>
              Option 2:
              <code>
                ourStr = "I come first."; ourStr += "I come second";
                console.log(ourStr);
              </code>
            </p>
          </li>
          <li>
            <p>Constructing strings with variables:</p>
            <p>
              <code>
                let ourName="Pooja"; let ourStr="Hello, my name is "+ ourName +
                "how are you?";
              </code>
            </p>
            <p>
              <code>console.log(ourStr);</code>
            </p>
          </li>
          <li>
            <p>Appending variables to strings:</p>
            <p>
              <code>let anAdjective="Awesome!";</code>
            </p>
            <code>
              <p>let ourStr="The Earth is ";</p>
              <p>ourStr+=anAdjective;</p>
            </code>
          </li>
          <li>
            <p>
              Find length of the string: by using .length we can find out the
              length of the string
            </p>
            <p>
              <code>let firstNameLength=0;</code>
            </p>
            <code>
              <p> firstName="Ada";</p>
              <p>firstNameLength=firstName.length;</p>
              <p>console.log(firstNameLength);</p>
            </code>
          </li>
          <li>
            <p>
              Bracket notation to find first character in string: It is a way to
              get a character at a specific index within a string.
            </p>
            <p>
              <code>let firstLetter="";</code>
            </p>
            <p>
              <code> firstName=Ada";firstLetter=firstName[0];</code>
            </p>
            <p>
              <code>console.log(firstLetter);</code>
            </p>
          </li>
          <li>
            <p>
              Bracket notation to find last character in string: It is a way to
              get a character at a specific index within a string.
            </p>
            <p>You can find whatever position by subtracting nth number.</p>
            <p>
              <code>let firstName="Ada";</code>
            </p>
            <p>
              <code>let lastLetter=firstName[firstName.length-1];</code>
            </p>
          </li>
          <li>
            <p>String Immutability:</p>
            <p>
              Strings are immutable, meaning they cannot be altered once
              created.
            </p>
            <code>
              <p>let myStr="Jello World";</p>
              <p>myStr="Hello World";</p>
            </code>
          </li>
          <li>
            <p>Word Blanks:</p>
            <p>
              <code>
                function wordBlanks(myNoun, myAdjective,myVerb,MyAdverb) &#123;
                let result=""; &#125;
              </code>
            </p>
            <p>
              <code>
                result+="The"+ myAdjective+ " " +myNoun+" "+myVerb+" "+ to the
                store"+" "+ myAdverb;
              </code>
            </p>
            <p>
              <code>return result;</code>
            </p>
            <p>
              <code>console.log(wordBlanks("cat","big","ran","quickly"));</code>
            </p>
          </li>
          <li>
            <p>Arrays:</p>
            <p>
              <code>
                arrays allow you to store several pieces of data in one place.
              </code>
            </p>
            <p>
              <code>Following is the example of array:</code>
            </p>
            <p>
              <code>const ourArray=["John", 23];</code>
            </p>
            <p>
              <code>It can be any data types.</code>
            </p>
          </li>
          <li>
            <p>Nested arrays:</p>
            <p>It means arrays within another Array</p>
            <p>
              <code>
                const ourArray=[["The universe",42],["everything",101010]];
              </code>
            </p>
          </li>
          <li>
            <p>Access Array data with Indexes:</p>
            <code>
              <p>const ourArray=[50,60,70];</p>
              <p>const ourData=ourArray[0];</p>
            </code>
            <p>
              <code>console.log(ourData);</code>
            </p>
          </li>
          <li>
            <p>Modify array data :</p>
            <p>
              <code>const ourArray=[18,64,99];</code>
            </p>
            <p>
              <code>ourArray[1]=45;</code>
            </p>
            <p>And for multi-dimensional Arrays:</p>
            <p>
              <code>
                const myArray=[[1,2,3],[4,5,6,],[7,8,9][[10,11,12],12,14]];
              </code>
            </p>
            <p>
              <code>let myData=myArray[2][1];</code>
            </p>
          </li>
          <li>
            <p>Manipulate array with push():</p>
            <p>
              You can add the data to the end of an array with the push
              function.
            </p>
            <p>
              <code>const ourArray=["Stimpson","J","Cat"];</code>
            </p>

            <p>
              <code>ourArray.push(["happy","joy"]);</code>
            </p>
            <p>This will give output as follows:</p>
            <p>
              <code>
                ourArray now equals to ["Stimpson","J","Cat"["happy","joy"]];
              </code>
            </p>
          </li>
          <li>
            <p>Manipulate array with pop():</p>
            <p> We can remove an item from an Array with the pop().</p>
            <p>
              <code>const ourArray=[1,2,3];</code>
            </p>
            <p>
              <code>let removedFromOurArray=ourArray.pop();</code>
            </p>
            <p>The above code gives following output</p>
            <p>
              <code>
                removedFromOurArray now equals 3, and ourArray now equals[1,2]
              </code>
            </p>
          </li>
          <li>
            <p>Manipulate arrays with shift():</p>
            <p>
              shift() is similar as pop() except shift() removes the first
              element of the array instead of the final element.
            </p>
            <p>
              <code>const ourArray=["Stimpson","J",["cat"]];</code>
            </p>
            <p>
              <code> const removedFromOurArray=ourArray.shift();</code>
            </p>
          </li>
          <li>
            <p>Manipulate arrays using unshift():</p>
            <p>
              It is similar to the push(), while push() adds an element at the
              end of the array, unshift() adds an element to the beginning of
              the array.
            </p>
            <p>
              <code>const ourArray=["Stimpson","J",["cat"]];</code>
            </p>
            <p>
              <code>ourArray.shift(); //ourArray now equals ["J","cat"]</code>
            </p>
            <p>
              <code>
                ourArray.unshift("Happy")// ourArray now equals to
                ["Happy","J","cat"];
              </code>
            </p>
          </li>

          <li>
            <p>Write reusable code with functions:</p>
            <p>Functions allows us to create reusable code in JavaScript.</p>
            <p>to write a function:</p>
            <p>
              <code>function functionName()&#123;&#125;</code>
            </p>
            <p>
              Anything inside the curly bracket will learn every time function
              is called.
            </p>
            <p>
              <code>
                function myName() &#123; console.log("My name is Pooja"); &#125;
                myName();
              </code>
            </p>
          </li>
          <li>
            <p>Passing values to functions with Arguments:</p>
            <p>
              Parameters are variables that act as placeholders for the values
              that are to be the input to a function when it is called.
            </p>
            <p>
              <code>function ourFunctionArgs(a,b)&#123;</code>
            </p>
            <p>
              <code>console.log(a-b);</code>
            </p>
            &#125;
            <p>
              <code>ourFunctionArgs(10,5);//outputs 5</code>
            </p>
          </li>
          <li>
            <p>Global scope and functions:</p>
            <p>
              Scope refers to the visibility of the variables. Variables which
              are defined outside of a function have a global scope. Global
              scope means they can be seen everywhere is your JavaScript scope.
            </p>
            <p>
              <code>let myVar=5</code>
            </p>
            <p>
              <code>function myGlobalScope()</code>
            </p>
            <p>
              <code>&#123;</code>
            </p>
            <p>
              <code>console.log(myVar);</code>
            </p>
            <p>
              <code>&#125;</code>
            </p>
            <p>
              <code>myGlobalScope();</code>
            </p>
          </li>
          <li>
            <p>Local Scope and functions:</p>
            <p>
              variables which are declared within a function as well as the
              function parameters have local scope which means they are only
              visible from within the function.
            </p>
            <p>
              <code>function myLocalScope()&#123;</code>
            </p>
            <p>
              <code>myVar=5;</code>
            </p>
            <p>
              <code>console.log(myVar);</code>
            </p>
            <p>
              <code>&#125;</code>
            </p>
            <p>
              <code>myLocalScope();</code>
            </p>
          </li>

          <li>
            <p>Return a value from a function:</p>
            <p>
              <code>function minusSeven(num)&#123;</code>
            </p>
            <p>
              <code>return num-7;</code>
            </p>
            <p>
              <code>&#125;</code>
            </p>
            <p>
              <code>console.log(minusSeven(10));</code>
            </p>
            <p>
              The above code explain that you can return a value from the return
              statement. When you pass a number from the minusSeven() it will
              execute whatever is after the return statement.
            </p>
          </li>
          <li>
            <p>Undefined value returned:</p>
            <p>
              If we don't specify the return value then return value is
              undefined.
            </p>
          </li>

          <li>
            <p>Boolean Values: It only returns True or False.</p>
            <p>
              <code>function welcomeBoolean()</code>
            </p>
            <p>
              <code>&#123;</code>
            </p>
            <p>
              <code>return true;</code>
            </p>
            <p>
              <code>&#125;</code>
            </p>
          </li>

          <li>
            <p>Use of conditional logic using if-else statements:</p>
            <p>
              <code>function ourTrueFalse()&#123;</code>
            </p>
            <p>
              <code>if(isItTrue)&#123;</code>
            </p>
            <p>
              <code>return "Yes,it is true";</code>
            </p>
            <p>
              <code>&#125;</code>
            </p>
            <p>
              <code>return "No, it is false.";</code>
            </p>
            <p>
              <code>&#125;</code>
            </p>
          </li>
          <li>
            <p>Equality Operators: == </p>
            <p>
              This is a sign of equality operator. By val==12 we are not
              declaring that value is equals to 12 it is checking if val is 12
              or not. This equality operator converts the type for example it
              will convert a string to a number. There is also a Strict Equality
              Operator === This operator needs same type of element on the other
              side as it does not do any conversions and it will evaluate false
              if the type is not same.
            </p>
          </li>

          <li>
            <p>Inequality operator: </p>
            <p> !=is the sign of inequality operator.</p>
            <p>
              {" "}
              Strict inequality operator used !== It works opposite of strict
              equality operator. We can use &gt; &gt;= &lt; &lt;= in our code.
            </p>
          </li>

          <li>
            <p>And / Or Operators:</p>
            <p>
              {" "}
              &amp;&amp; is used for And operator and || is used for or
              operator.
            </p>
            <p>For Example,</p>
            <p>
              <code>
                function testLogicalAnd(val)&#123;
                <p>
                  <code>if(val &lt;=50 &amp;&amp; val&gt;=25)&#123;</code>
                </p>
                <p>
                  <code>return "Yes";</code>
                </p>
                <p>
                  <code>&#125;</code>
                </p>
                <p>
                  <code>return "No";</code>
                </p>
                <p>
                  <code>
                    {" "}
                    <code>&#125;</code>
                  </code>
                </p>
                <p>
                  <code>testLogicalAnd(10)</code>
                </p>
              </code>
            </p>
            <p>
              Above example explains that both the statements in the if
              statement have to be true otherwise answer will be No.
            </p>
          </li>

          <li>
            <p>if-else statements</p>
          </li>
          <li>
            <p>Switch statement :</p>
            <p>
              Instead of choosing chained if-else statement, we can use switch
              statements.
            </p>
            <p>For example;</p>
            <p>
              <code>function chainToSwitch(val)&#123;</code>
            </p>
            <p>
              <code>let answer="";</code>
            </p>
            <p>
              <code>switch(val)&#123;</code>
            </p>
            <p>
              <code>case "Bob":</code>
            </p>
            <p>
              <code>answer="Marley";</code>
            </p>
            <p>
              <code>break;</code>
            </p>
            <p>
              <code>case 42:</code>
            </p>
            <p>
              <code>answer="The Answer";</code>
            </p>
            <p>
              <code>break;</code>
            </p>
            <p>
              <code>&#125;</code>
            </p>
          </li>
          <li>
            <p>Returning boolean values from functions:</p>
            <p>
              You can use this if you want a function to return true or false
              value. For example-
            </p>
            <p>
              <code>
                function isLess(a,c)&#123;
                <p>
                  <code>if(a&lt;c)&#123;</code>
                </p>
                <p>
                  <code>return true;</code>
                </p>
                <p>
                  <code> else &#123;</code>
                </p>
                <p>
                  <code>return false;</code>
                </p>
                <p>
                  <code>&#125;</code>
                </p>
              </code>
            </p>

            <p>
              <code>isLess(10,15);</code>
            </p>
            <p>Instead we can write it as follows:</p>
            <p>
              <code>function isLess(a,c)&#123;</code>
            </p>
            <p>
              <code>return a&lt;c; </code>
            </p>
            <p>
              <code>&#125;</code>
            </p>
            <p>
              <code>console.log(isless(10,15));</code>
            </p>
          </li>
          <li>
            <p>Objects:</p>
            <p>
              Objects are similar to arrays except instead of using indexes to
              access data, we use properties.
            </p>
            <p>
              <code>let ourDog = &#123;</code>
            </p>
            <p>"name":"Camper";</p>
            <p>"legs"=4;</p>
            <p>"friends"=[]</p>
            <p>&#125;;</p>
            <p>There are two ways to access the property of an object.</p>
            <ol>
              <li>Dot notation</li>
              <li>Bracket Notation.</li>
            </ol>
            <p>let ourDog=&#123;</p>
            <p>"name":"Camper";</p>
            <p>"legs"=4;</p>
            <p>"friends"=[]</p>
            <p>&#125;;</p>
            <p>let dogName=ourDog.name;</p>
            <p> let dogLegs=ourDog["legs"];</p>
            <p>
              Bracket notation also can be used to look up object properties
              using variables.
            </p>
            <p>
              <code>let ourDog=&#123;</code>
            </p>
            <p>
              <code>"name":"Camper";</code>
            </p>
            <p>
              <code>"legs"=4;</code>
            </p>
            <p>
              <code>"friends"=[]</code>
            </p>
            <p>
              <code>&#125;;</code>
            </p>
            <p>
              <code>let dogName="name";</code>
            </p>
            <p>
              <code>let dog=ourDog[dogName];</code>
            </p>
          </li>
          <li>
            <p>Updating object properties:</p>
            <p>
              <code>ourDog.name="Happy Camper";</code>
            </p>
          </li>
          <li>
            <p>Add and delete properties to object:</p>
            <p>To add a property:</p>
            <p>
              <code>ourDog.bark="bow-wow";</code>
            </p>
            <p>
              To delete a property: <code>delete ourDog.bark;</code>
            </p>
          </li>
          <li>
            <p>Objects for lookup values: For example,</p>
            <p>function phoneticLookup(val)&#123;</p>
            <p>
              <code>let result="";</code>
            </p>
            <p>
              <code>let lookup=&#123;</code>
            </p>
            <p>
              <code>"alpha":"Adams",</code>
            </p>
            <p>
              <code>"bravo":"Boston",</code>
            </p>
            <p>
              <code>"charlie":"chicago",</code>
            </p>
            <p>
              <code>&#125;;</code>
            </p>
            <p>
              <code>result=lookup[val];</code>
            </p>
            <p>
              <code>return result;</code>
            </p>
            <p>
              <code>&#125;</code>
            </p>
            <p>
              <code>console.log(phoneticLookup("charlie"));</code>
            </p>
          </li>
        </ol>
      </div>
    </PageLayout>
  );
}
