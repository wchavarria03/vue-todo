<template>
  <div className="header">
    <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={addTodo}
        onChange={changeInput}
        value={newTodo}
      />
    </div>
</template>
<scripts>
  export default {

  };
</scripts>
