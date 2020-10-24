require "byebug"
grid_ = [
  [".","4",".",".",".",".",".",".","."],
  [".",".","4",".",".",".",".",".","."],
  [".",".",".","1",".",".","7",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".","3",".",".",".","6","."],
  [".",".",".",".",".","6",".","9","."],
  [".",".",".",".","1",".",".",".","."],
  [".",".",".",".",".",".","2",".","."],
  [".",".",".","8",".",".",".",".","."]
]

grid1 = [
  [".",".","4",".",".",".","6","3","."],
  [".",".",".",".",".",".",".",".","."],
  ["5",".",".",".",".",".",".","9","."],
  [".",".",".","5","6",".",".",".","."],
  ["4",".","3",".",".",".",".",".","1"],
  [".",".",".","7",".",".",".",".","."],
  [".",".",".","5",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."]
]

grid3 = [
  ["7",".",".",".","4",".",".",".","."],
  [".",".",".","8","6","5",".",".","."],
  [".","1",".","2",".",".",".",".","."],
  [".",".",".",".",".","9",".",".","."],
  [".",".",".",".","5",".","5",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".","2",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."]
]

def is_repeating_in_x(grid, x, y)
  i = x + 1
  element = grid[x][y]
  flag = false
  while i < grid.length
    # puts "___i:#{i}________element#{element}_______grid[x+#{i}][y]___#{grid[i][y]}___________" if grid[i]
    if grid[i] && grid[i][y] == element
      flag = true
      break
    end
    i = i + 1
  end
  return flag
end

def is_repeating_in_y(grid, x, y)
  i = y + 1
  element = grid[x][y]
  flag = false
  while(i < grid.length - 1)
    if grid[x][y+i] == element
      flag = true
      break
    end
    i = i + 1
  end
  return flag
end

def match_in_xy(grid, x, y)
  (is_repeating_in_y(grid, x, y) || is_repeating_in_x(grid, x, y))
end

def is_valid_grid(grid, x, y)
  index_x = x
  memory_object = {}
  while index_x < x+3
    index_y = y
    while index_y < y+3
      if grid[index_x][index_y] != '.'
        value = "x_#{grid[index_x][index_y]}"
        memory_object[value] = (memory_object[value] != nil ? (memory_object[value] + 1) : 1)
        return false if memory_object[value] > 1
      end
      index_y += 1
    end
    index_x += 1
  end
  return false if memory_object.empty?
  return true
end

def check_suduko_element_level(ind_grid)
  i=0
  while(i<ind_grid.length)
    j=0
    while(j<ind_grid[i].length)
      if(ind_grid[i][j] != '.')
        flag_x = is_repeating_in_x(ind_grid, i, j)
        flag_y = is_repeating_in_y(ind_grid, i, j)
        # puts "_________x:#{flag_x}__y:#{flag_y}____element:#{ind_grid[i][j]}"
        if(flag_x || flag_y)
          return false
        end
      end
      j = j + 1
    end
    i = i + 1
  end
  return true
end

def is_suduko(grid)
  i = 0
  while( i < 3)
    j = 0
    while(j < 3)
      return false unless is_valid_grid(grid, i * 3, j * 3)
      j = j + 1
    end
    i = i + 1
  end
  return true
end

def sudoku2(grid)
  return is_suduko(grid) && check_suduko_element_level(grid)
end
puts is_suduko(grid3)
# puts is_suduko(grid1)
# puts is_suduko(grid_)
# puts check_suduko_element_level(grid1)
# puts check_suduko_element_level(grid_)
