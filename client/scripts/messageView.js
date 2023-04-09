// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: (message) => {
    message.friendClass = message.frendClass || 'normal';
    return _.template(`
      <div class="chat">
        <div class="username"><%= username %></div>
        // <div class="username" data-username="<%= username %>"><%= username %></div>
        <div class="message <%= friendClass %>"><%= text %></div>
      </div>
    `)(message);
  },
};
