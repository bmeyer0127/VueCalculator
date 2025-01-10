<script setup lang="ts">
  import { ref } from 'vue'
  import NumberButton from './components/NumberButton.vue'
  import OperationButton from './components/OperationButton.vue'
  import ScreenDisplay from './components/ScreenDisplay.vue'
  import BackspaceIcon from './components/icons/BackspaceIcon.vue'

  const expressionArray: string[] = [];
  const expressionString = ref<string>('');
  const expressionDisplay = ref<string>('');
  const result = ref<string>('0');

  // Add text to calculator screen
  const appendToScreen = (displayItem: string, expressionItem: string) => {
    expressionDisplay.value += displayItem;
    expressionArray.push(expressionItem);
    evaluateExpression();
  }

  // Remove text from calculator screen
  const deleteScreenDisplay = () => {
    expressionDisplay.value = expressionDisplay.value.slice(0, -1);
    expressionArray.pop();
    evaluateExpression();
  }

  // Final evaluation
  const evaluateExpression = () => {

    // Clear expressionString
    expressionString.value = '';

    // Fit expressionArray into expressionString, which is then evaluated
    expressionArray.forEach((item) => {
      expressionString.value += item;
    });

    if (expressionDisplay.value != "") {
      try {
        result.value = eval(expressionString.value).toString();
      } catch (e) {
        console.log(e + ": Everything is fine, I swear");
        return
      }
    }
    // Edge case senarios
    if (result.value === "Infinity") {
      result.value = "don't do that, idiot";
    }
    else if (expressionDisplay.value === "" || expressionDisplay.value === "0") {
      result.value = "0";
    }
  }

  const completeEvaluation = () => {
    expressionDisplay.value = result.value;
    evaluateExpression();
  }
</script>

<template>
  <main>
    <div class="calc-container">
      <div class="calc-screen">
        <ScreenDisplay :expression="expressionDisplay" :result="result"/>
      </div>
      <div class="calc-buttons">
        <div class="operations-container-up">
          <OperationButton operation="+" @click="appendToScreen('+', '+')" />
          <OperationButton operation="-" @click="appendToScreen('-', '-')" />
          <OperationButton operation="*" @click="appendToScreen('*', '*')" />
          <OperationButton operation="/" @click="appendToScreen('/', '/')" />
          <OperationButton operation="(" @click="appendToScreen('(', '(')" />
          <OperationButton operation=")" @click="appendToScreen(')', ')')" />
          <OperationButton operation="^" @click="appendToScreen('^(', '**(')" />
          <OperationButton @click="appendToScreen('\u221A(', 'Math.sqrt(')">{{ '\u221a' }}</OperationButton>
        </div>
        <div class="operations-container-left">

        </div>
        <div class="operations-container-up-left">

        </div>
        <div class="numbers-container">
           <div class="num-container-row">
             <NumberButton :number="1" class="'num-1" @click="appendToScreen('1', '1')"/>
             <NumberButton :number="2" class="'num-2" @click="appendToScreen('2', '2')"/>
             <NumberButton :number="3" class="'num-3" @click="appendToScreen('3', '3')"/>
           </div>
           <div class="num-container-row">
             <NumberButton :number="4" class="'num-4" @click="appendToScreen('4', '4')"/>
             <NumberButton :number="5" class="'num-5" @click="appendToScreen('5', '5')"/>
             <NumberButton :number="6" class="'num-6" @click="appendToScreen('6', '6')"/>
           </div>
           <div class="num-container-row">
             <NumberButton :number="7" class="'num-7" @click="appendToScreen('7', '7')"/>
             <NumberButton :number="8" class="'num-8" @click="appendToScreen('8', '8')"/>
             <NumberButton :number="9" class="'num-9" @click="appendToScreen('9', '9')"/>
           </div>
           <div class="num-container-row">
             <!-- <OperationButton @click="appendToScreen('.')">.</OperationButton> -->
             <OperationButton operation="." @click="appendToScreen('.', '.')"/>
             <NumberButton :number="0" class="'num-0" @click="appendToScreen('0', '0')"/>
             <OperationButton class="operation-button" @click="deleteScreenDisplay"><BackspaceIcon/></OperationButton>
           </div>
           <div class="num-container-row">
             <OperationButton class="equal-sign" operation="=" @click="completeEvaluation()" />
           </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

  .calc-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
  }

  .calc-screen {
    display: flex;
    width: 100%;
    height: calc(100vh - (--button-size * 11));
  }

  .calc-buttons {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: calc(var(--button-size) * 11);
  }

  .operations-container-up {
    display: flex;
    flex-wrap: wrap-reverse;
    flex-direction: row;
    align-self: flex-end;
    align-items:flex-end;
    justify-content: flex-end;
    width: calc(var(--button-size) * 3);
  }

  .operations-container-left {

  }

  .operations-container-up-left {

  }

  .numbers-container {
    display: flex;
    flex-wrap: wrap;
    align-self: flex-end;
    justify-content: flex-end;
    width: calc(var(--button-size) * 3);
  }

  .num-container-row {
    display: flex;
    flex-wrap: nowrap;
  }

  .equal-sign {
    width: calc(var(--button-size) * 3);
  }
</style>
