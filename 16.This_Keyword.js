// Four Ways to Call A Function :-
// 1:-Function call by directly its name .  eg:- art();
// 2:-Using CALL Method():- call() allows you to invoke a function with a specified this context. eg:- art.call();
// 3:- Calling Functions as Methods :-Functions defined within objects can be called as methods.  eg:- obj.art();
// 4:-Using a new Keyword():- Call a function as a constructor to create a new object. new art();

// This Keyword :- refers to the context in which a function is called. Its value depends on how the function is invoked, and it behaves differently in strict mode and non-strict mode.

// Context	Value of this
// Global Scope	:-window (or undefined in strict mode)
// Object Method	:-The object itself
// Regular Function (Non-strict):-	window
// Regular Function (Strict Mode):-	undefined
// Arrow Function	:- Lexical this (from the surrounding scope)
// Constructor Function	 :- The instance being created
// Class :-	The class instance
// call(), apply(), bind() :-	Explicitly set this
// Event Listener (Regular)	:- The target element
// Event Listener (Arrow Function):- 	Lexical this



function art()
{
  console.log(this);
}
art();

console.log(this);