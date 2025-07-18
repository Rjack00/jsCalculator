export function tokenize(expr) {
  const tokens = [];
  let i = 0;
  
  while(i < expr.length) {
    
    if(/\d/.test(expr[i]) || expr[i] === ".") {
      let numStr = expr[i];
      i++;
      
      while(i < expr.length && /[\d.]/.test(expr[i])) {
        numStr += expr[i];
        i++;
      }
      tokens.push(numStr);
      
    } else if (expr[i] === "-" && (tokens.length === 0 || "+-x/".includes(tokens[tokens.length -1]))) {
      let numStr = expr[i];
      i++;
      
      while(i < expr.length && /[\d.]/.test(expr[i])) {
        numStr += expr[i];
        i++;
      }
      tokens.push(numStr);
      
    } else if("+-x/".includes(expr[i])) {
      tokens.push(expr[i]);
      i++;
      
    } else {
      i++;
    }
  }
  
  console.log("TOKENIZED :", tokens);
  return tokens;
}
  
const precedence = {
  "+" : 1,
  "-" : 1,
  "x" : 2,
  "/" : 2
}
  
export function toPostfix(tokens) {
  const output = [];
  const ops = [];

  for(let token of tokens) {
    if(!isNaN(token)) {
      output.push(token);
    } else if ("+-x/".includes(token)) {
      while (ops.length && precedence[ops[ops.length -1]] >= precedence[token]){
        output.push(ops.pop());
      }
      ops.push(token);
    }
    }
    while (ops.length) {
    output.push(ops.pop());
  }
  return output;
}

export function evaluatePostfix(postfix) {
  const stack = [];
  
  for(let token of postfix) {
    if(!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      switch (token) {
        case "+": stack.push(a + b); break;
        case "-": stack.push(a - b); break;
        case "x": stack.push(a * b); break;
        case "/": stack.push(a / b); break;
      }
    }
  }
  return `= ${stack[0]}`;
}

export function evaluateExpr (expr) {
  const token = tokenize(expr);
  const postfix = toPostfix(token);
  return evaluatePostfix(postfix);
}
