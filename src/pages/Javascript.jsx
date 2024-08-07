import { PageLayout } from "../components/PageLayout";
import "./LearningJavaScript.css";

export function LearningJavaScript() {
  return (
    <PageLayout title="Building Proficiency in JavaScript">
      <div className="learning-javascript">
        <img
          className="article-image"
          src="/images/git-article.jpg"
          alt=" Cartoon girl studying technology"
        />

        <p>
          <code style={{ textWrap: "wrap", whiteSpace: "pre-line" }}>
            {`<script> 
var name = "Pooja";
var lastName = "Darade";
var studyLevel = "Masters"
console.log(name, lastName, studyLevel);
</script>`}
          </code>
        </p>

        <p>Important data structures in Javascript</p>
        <h3>Following are the options to write JavaScript:</h3>
        <ul>
          <li>Use any code editor - I am using VS code</li>
          <li>Another option is online code editors such as codepen</li>
          <li>Create a HTML File as you can run that in a any web browser</li>
        </ul>
        <h3>Important things to know to write JavaScript</h3>
        <ol>
          <li>
            <p>
              First thing we are going to learn is how to add{" "}
              <b>comments in JavaScript</b>
            </p>
            <p>
              <code>//</code> is used for in-line comments.
            </p>
            <p>
              <code>/* */</code> is used for multi-line comment.
            </p>
            <p>You end every line in JavaScript with a ";"" semicolon.</p>
          </li>
          <li>
            <p>Data types:</p>

            <ul>
              <li>undefined: Something which has not been defined yet</li>
              <li>
                null: When you set this property to an element that results
                nothing for the output for that element
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
              basically a label to point to a data.
            </p>

            <p>There are three ways to declare variables:</p>

            <ol>
              <li>
                <code>var muName = "Beau" followed by myName = 8</code>
              </li>
              <li>
                <code>let ourName = "Pooja"</code>
              </li>
              <li>
                <code>const yourName = "John"</code>
              </li>
            </ol>

            <p>
              A difference between <code>var</code>,<code>const</code> and{" "}
              <code>let</code>. A var is going to be able to be used throughout
              your whole program. Let will only be able to use within scope
              where you declare that and const is a variable that can never
              change.
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
                var b=2; By using = assignment operator we can assign variable
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
              <code>var a=9;</code>
              In this we are declaring and initializing variable at the same
              time. var a is declaring it and by using assignment operator = we
              are initializing value 9.
            </p>
          </li>
          <li>
            <p>Case sensitivity in variables:</p>
            <p>
              {" "}
              Variable names and function names are case sensitive in the
              JavaScript. Use camelCase when are you declaring variable. For
              example. start a variable name with small letters and when you
              have new work use capital letter
            </p>
            <code>study JavaScript</code>
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
            <p>Concatenating strings with plus operator: </p>
            <p>
              <code>
                Option 1: var ourStr = "I come first." + "I come second.";{" "}
              </code>
            </p>

            <p>
              var myStr2 = "This is the start" + "This is the end.";
              console.log(myStr2);
            </p>

            <p>
              Option 2:
              <code>
                {" "}
                ourStr = "I come first."; ourStr += "I come second";
                console.log(ourStr);
              </code>
            </p>
          </li>
          <li>
            <p>Constructing strings with variables:</p>
            <p>
              <code>
                var ourName="Pooja"; var ourStr="Hello, my name is "+ ourName +
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
              <code>var anAdjective="Awesome!";</code>
            </p>
            <code>
              <p>var ourStr="The Earth is ";</p>
              <p>ourStr+=anAdjective;</p>
            </code>
          </li>
          <li>
            <p>
              Find length of the string: by using .length we can find out the
              length of the string
            </p>
            <p>
              <code>var firstNameLength=0;</code>
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
              <code>var firstLetter="";</code>
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
              <code>var firstName="Ada";</code>
            </p>
            <p>
              <code>var lastLetter=firstName[firstName.length-1];</code>
            </p>
          </li>
          <li>
            <p>String Immutability:</p>
            <p>
              Strings are immutable,meaning they cannot be altered once
              created.It does not mean it cannot be changed, just that the
              individual characters of a string literal cannot be changed.
            </p>
            <code>
              <p>var myStr="Jello World";</p>
              <p>myStr="Hello World";</p>
            </code>
          </li>
          <li>
            <p>Word Blanks:</p>
            <p>
              <code>
                function wordBlanks(myNoun, myAdjective,myVerb,MyAdverb) &#123;
                var result=""; &#125;
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
              <code>var ourArray=["John", 23];</code>
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
                var ourArray=[["The universe",42],["everything",101010]];
              </code>
            </p>
          </li>
          <li>
            <p>Access Array data with Indexes:</p>
            <code>
              <p>var ourArray=[50,60,70];</p>
              <p>var ourData=ourArray[0];</p>
            </code>
            <p>
              <code>console.log(ourData);</code>
            </p>
          </li>
          <li>
            <p>Modify array data :</p>
            <p>
              <code>var ourArray=[18,64,99];</code>
            </p>
            <p>
              <code>ourArray[1]=45;</code>
            </p>
            <p>And for multi-dimensional Arrays:</p>
            <p>
              <code>
                var myArray=[[1,2,3],[4,5,6,],[7,8,9][[10,11,12],12,14]];
              </code>
            </p>
            <p>
              <code>var myData=myArray[2][1];</code>
            </p>
          </li>
          <li>
            <p>Manipulate array with push():</p>
            <p>
              You can have pinned data to the end of an array with the push
              function.
            </p>
            <p>
              <code>var ourArray=["Stimpson","J","Cat"];</code>
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
              <code>var ourArray=[1,2,3];</code>
            </p>
            <p>
              <code>var removedFromOurArray=ourArray.pop();</code>
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
              <code>var ourArray=["Stimpson","J",["cat"]];</code>
            </p>
            <p>
              <code> var removedFromOurArray=ourArray.shift();</code>
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
              <code>var ourArray=["Stimpson","J",["cat"]];</code>
            </p>
            <p>
              <code>ourArray.shift();//oueArray now equals ["J","cat"]</code>
            </p>
            <p>
              <code>
                ourArray.unshift("Happy")// ourArray now equals to
                ["Happy","J","cat"];
              </code>
            </p>
          </li>
          <li>
            <p>Shopping list</p>
          </li>

          <li>
            <p>Write reusable code with functions:</p>
            <p>Functions allows us to create reusable code in JavaScript.</p>
            <p>to write a function:</p>
            <p>
              <code>function function-name()&#123;&#125;</code>
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
              Scope refers to the visibility of the variables.Variables which
              are defined outside of a function have a global scope. Global
              scope means they can be seen everywhere is your JavaScript scope.
            </p>
            <p>
              <code>var myVar=5</code>
            </p>
            <p>
              <code> myGlobalScope()</code>
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
              <code>function minusSever(num)&#123;</code>
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
              statement.When you pass a number from the minusSeven() it will
              execute whatever is after the return statement.
            </p>
          </li>
          <li>
            <p>Undefined value entered:</p>
            <p>
              If we don't specify the return value then return value is
              undefined.
            </p>
          </li>

          <li>
            <p>Stand in Line</p>
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
              or not. this equality operator converts the type for example it
              will convert a string to a number.There is also a{" "}
              <b>Strict Equality Operator ===</b>: this operator needs same type
              of element on the other side as it does not do any conversions and
              it will evaluate false if the type is not same.
            </p>
          </li>

          <li>
            <p>Inequality operator: </p>
            <p> !=is the sign of inequality operator.</p>
            <p>
              {" "}
              Strict inequality operator used !== .it works opposite of strict
              equality operator. We can use &gt; &gt;= &lt; &lt;=in out code.
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
              <code>function testLogicalAnd(val)&#123;&#125; </code>
            </p>
          </li>
          <li>
            <p>
              <code>if(val &lt;=50 &amp;&amp; val&gt;=25)&#123;</code>
            </p>
            <p>
              <code>return "Yes";</code>
            </p>
            <p>
              <code>return "No";</code>
            </p>
            <p>
              <code>testLogicalAnd(10);&#125;</code>
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
              <code>var answer="";</code>
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
              <code>function isLess(a,c)&#123;&#125;</code>
            </p>
            <p>
              <code>(a&lt;c)&#123;</code>
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
            <p>
              <code>&#125;;</code>
            </p>
            <p>
              <code>isLess(10,15);</code>
            </p>
            <p>Instead we can write it as follows :</p>
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
              Objects are similar to arrays except instead of using indexes
              access data, we use properties.
            </p>
            <p>
              <code>var ourDog=&#123;</code>
            </p>
            <p>"name":"Camper";</p>
            <p>"legs"=4;</p>
            <p>"friends"=[]</p>
            <p>&#125;;</p>
            <p>There are two ways to access the property of an object.</p>
            <ol>
              <li>Dot notation</li>
              <li>2.Bracket Notation.</li>
            </ol>
            <p>var ourDog=&#123;</p>
            <p>"name":"Camper";</p>
            <p>"legs"=4;</p>
            <p>"friends"=[]</p>
            <p>&#125;;</p>
            <p>var dogName=ourDog.name;</p>
            <p> var dogLegs=ourDog["legs"];</p>
            <p>
              Bracket notation also can be used to look up object properties
              using variables.
            </p>
            <p>
              <code>var ourDog=&#123;</code>
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
              <code>var dogName="name";</code>
            </p>
            <p>
              <code>var dog=ourDog[dogName];</code>
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
            <p>To add a property -</p>
            <p>
              <code>ourDog.bark="bow-wow";</code>
            </p>
            <p>
              To delete a property : <code>delete ourDog.bark;</code>
            </p>
          </li>
          <li>
            <p>Objects for lookup values:For example,</p>
            <p>function phoneticLookup(val)&#123;</p>
            <p>
              <code>var result="";</code>
            </p>
            <p>
              <code>var lookup=&#123;</code>
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

          <li>
            <p>Testing objects for properties</p>
          </li>
          <li>
            <p>Manipulating complex objects </p>
          </li>
        </ol>
      </div>
    </PageLayout>
  );
}
