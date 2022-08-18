# Introduction

It is a divination program. The user types a question, and a random response is shown.

It was developed with pure HTML, CSS, and JavaScript.

# Workflow

1. The user types a question in the input field, and click the button with "Ask" within.
   1. If the input field is empty, show an error message asking for some text.
2. The typed question is shown again beneath the input field, with a random response to that below this.

# Objects

## questionButton

<table>
   <thead>
      <th>Attribute</th>
      <th>Definition</th>
   </thead>
   <tbody>
      <tr>
         <td>questionButton</td>
         <td>It represents the ask &lt;button> clicked.</td>
      </tr>      
   </tbody>
</table>
<table>
   <thead>
      <th>Method</th>
      <th>Definition</th>
   </thead>
   <tbody>
      <tr>
         <td>askQuestion</td>
         <td>Button action that shows the response to the question.</td>
      </tr> 
      <tr>
         <td>enable</td>
         <td>It enables the button.</td>
      </tr>
      <tr>
         <td>disable</td>
         <td>It disables the button.</td>
      </tr>      
   </tbody>
</table>

## responseElement

<table>
   <thead>
      <th>Attribute</th>
      <th>Definition</th>
   </thead>
   <tbody>
      <tr>
         <td>possibleResponses</td>
         <td>Possible responses that are randomly chosen.</td>
      </tr>
      <tr>
         <td>response</td>
         <td>It represents the &lt;div> that will show the question response.</td>
      </tr>
   </tbody>
</table>
<table>
   <thead>
      <th>Method</th>
      <th>Definition</th>
   </thead>
   <tbody>
      <tr>
         <td>hideResponse</td>
         <td>It hides the HTML response element.</td>
      </tr>
      <tr>
         <td>randomPossibleResponseIndex</td>
         <td>It returns a random index number response for some response to be picked up from the responses array.</td>
      </tr>
      <tr>
         <td>showResponse</td>
         <td>It makes the response visible to the user.</td>
      </tr>      
   </tbody>
</table>

## questionInput

<table>
   <thead>
      <th>Attribute</th>
      <th>Definition</th>
   </thead>
   <tbody>
      <tr>
         <td>question</td>
         <td>It represents the input question of the user.</td>
      </tr>
   </tbody>
</table>
<table>
   <thead>
      <th>Method</th>
      <th>Definition</th>
   </thead>
   <tbody>
      <tr>
         <td>isEmpty</td>
         <td>It verifies whether the user has typed something.</td>
      </tr>                  
   </tbody>
</table>

# Copyright

- Icon of crystal ball made by **googlefonts** from **github.com**