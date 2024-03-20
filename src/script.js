document.getElementById('advancedCheckbox').addEventListener('change', function () {
    const advancedFields = document.getElementById('advancedFields');
    advancedFields.style.display = this.checked ? 'block' : 'none';
});

document.getElementById('queryForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const selectFields = document.getElementById('selectFields').value.trim();
    const fromTable = document.getElementById('fromTable').value.trim();
    const joinTable = document.getElementById('joinTable').value.trim();
    const joinCondition = document.getElementById('joinCondition').value.trim();
    const whereCondition = document.getElementById('whereCondition').value.trim();
    const groupByFields = document.getElementById('groupByFields').value.trim();
    const orderByFields = document.getElementById('orderByFields').value.trim();

    let query = `SELECT ${selectFields} FROM ${fromTable}`;

    if (joinTable !== '' && joinCondition !== '') {
        query += ` JOIN ${joinTable} ON ${joinCondition}`;
    }

    if (whereCondition !== '') {
        query += ` WHERE ${whereCondition}`;
    }

    if (groupByFields !== '') {
        query += ` GROUP BY ${groupByFields}`;
    }

    if (orderByFields !== '') {
        query += ` ORDER BY ${orderByFields}`;
    }

    query += ';'; // Dodanie średnika na końcu zapytania

    document.getElementById('queryTextarea').value = query;
});

document.getElementById('clearButton').addEventListener('click', function () {
    document.getElementById('selectFields').value = '';
    document.getElementById('fromTable').value = '';
    document.getElementById('joinTable').value = '';
    document.getElementById('joinCondition').value = '';
    document.getElementById('whereCondition').value = '';
    document.getElementById('groupByFields').value = '';
    document.getElementById('orderByFields').value = '';
    document.getElementById('queryTextarea').value = '';
});

document.getElementById('copyButton').addEventListener('click', function () {
    const queryTextarea = document.getElementById('queryTextarea');
    queryTextarea.select();
    document.execCommand('copy');
    alert('Query copied to clipboard');
});
