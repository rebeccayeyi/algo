def prime(n)
  if !n.is_a?(Integer) || n < 2 || n%2 == 0
    return false
  end
  counter = 3
  while counter < n/2 do
    if n%counter == 0
      return false
    else
      counter += 2
    end
  end
  return true
end

def fibonacci(n)
  seq = [1, 1]
  until seq.length == n do
    seq << seq[-1] + seq[-2]
  end
  return seq.last
end
