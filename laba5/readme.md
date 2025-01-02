# Алгоритмы отсечения отрезков

Этот проект демонстрирует работу двух алгоритмов отсечения отрезков:

1. **Алгоритм Лианга-Барски** — используется для отсечения отрезков прямоугольным окном.
2. **Алгоритм отсечения многоугольником** — используется для отсечения отрезков, заданных многоугольником.

Проект позволяет визуализировать отсеченные и исходные отрезки на координатной плоскости, что помогает лучше понять принцип работы этих алгоритмов.

## Особенности

- Реализация алгоритма **Лианга-Барски**, который работает с прямоугольными окнами.
- Реализация алгоритма **отсечения многоугольником** для произвольных выпуклых многоугольников.
- Возможность ввода данных для отрезков и окна отсечения через текстовое поле.
- Отображение исходных и отсеченных отрезков на canvas.
- Интерактивный выбор алгоритма и ввода данных.

## Использование

После открытия проекта в браузере, вы увидите интерфейс с текстовым полем для ввода данных и кнопкой для обработки. Сначала введите данные для отрезков и окна отсечения, а затем выберите один из алгоритмов отсечения. 

### Формат ввода данных:

1. Введите количество отрезков (целое число).
2. Для каждого отрезка введите координаты двух точек (X1, Y1, X2, Y2).
3. Для прямоугольного окна отсечения (для алгоритма Лианга-Барски):
   - Введите координаты левого нижнего угла и правого верхнего угла (Xmin, Ymin, Xmax, Ymax).
4. Для алгоритма отсечения многоугольником:
   - Введите координаты вершин многоугольника в порядке обхода по часовой стрелке.

### Пример 1: Использование алгоритма Лианга-Барски (прямоугольное окно)

**Ввод:**
4 
50 50 200 50 
50 50 50 200 
200 50 200 200 
50 200 200 200 
100 100 150 150


**Описание:**  
В этом примере используется алгоритм Лианга-Барски с прямоугольным окном. Один отрезок будет полностью внутри окна отсечения, а остальные отрезки будут частично пересекаться с окном.

---

### Пример 2: Использование алгоритма отсечения многоугольником

**Ввод:**
4
50 50 200 50
50 50 50 200
200 50 200 200
50 200 200 200
100 100 200 100
100 100 100 200


**Описание:**  
В этом примере используется алгоритм отсечения отрезков выпуклым многоугольником. Отрезки, пересекающиеся с многоугольником, будут отсечены, и только те части отрезков, которые остаются внутри многоугольника, будут отображены.

---

### Пример 3: Отсечение отрезков, не пересекающих окно отсечения (алгоритм Лианга-Барски)

**Ввод:**

2
10 10 90 10
10 10 10 90
100 100 150 150

**Описание:**  
В этом примере два отрезка не пересекают окно отсечения, и они не будут отображены в результате работы алгоритма Лианга-Барски.

---

### Пример 4: Несколько отрезков с разными пересечениями (алгоритм Лианга-Барски)

**Ввод:**
3
50 50 150 50
200 50 250 50
100 100 200 200
100 100 200 200

**Описание:**  
В этом примере несколько отрезков пересекают прямоугольное окно отсечения. Некоторые из них будут полностью отсечены, другие — частично.

---

### Пример 5: Отсечение отрезков, не пересекающих окно отсечения (алгоритм отсечения многоугольником)

**Ввод:**

2
10 10 90 10
10 10 10 90
100 100 150 150


**Описание:**  
Здесь использован алгоритм отсечения многоугольником. В примере отображаются только те части отрезков, которые лежат внутри многоугольника.

---

## Визуализация

После обработки данных на холсте отображаются:

- **Синие отрезки** — это исходные отрезки.
- **Зеленые отрезки** — это отсеченные отрезки, которые остаются внутри окна отсечения или многоугольника.

### Пояснение:

- **Если выбран алгоритм Лианга-Барски**:
  - Синие отрезки будут исходными, возможно, с частями, которые выходят за пределы окна.
  - Зеленые отрезки — это те части синих отрезков, которые пересекаются с прямоугольным окном.
  
- **Если выбран алгоритм отсечения многоугольником**:
  - Синие отрезки — это все начальные отрезки, которые вы ввели.
  - Зеленые отрезки — это те части синих отрезков, которые лежат внутри многоугольника и не выходят за его границы.






