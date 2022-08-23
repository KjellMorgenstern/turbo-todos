class Todo < ApplicationRecord
  after_update_commit do
    broadcast_append_to 'todos'

    if complete?
      broadcast_replace_to 'todo-redirect-hook', partial: 'todos/redirect'
    end
  end

  validates :title, presence: true

  enum status: { incomplete: 0, complete: 1 }
end
